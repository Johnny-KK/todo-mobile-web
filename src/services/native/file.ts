interface Entry {
  getFile: Function;
  createReader: Function;
  isFile: boolean;
  isDirectory: boolean;
  name: string;
}

interface File {
  createWriter: Function;
  name: string;
}

interface Writer {
  write: Function;
  onwrite: Function;
}

/** 解析本地设备路径获取文件/目录对象 */
function resolveFileSystem(filePath: string): Promise<Entry> {
  return new Promise((resolve, reject) => {
    window.plus.io.resolveLocalFileSystemURL(
      filePath,
      (entry: Entry) => resolve(entry),
      () => reject(false)
    );
  });
}

/** 读取文件 */
function getFile(entry: Entry, fileName: string): Promise<File> {
  return new Promise((resolve, reject) => {
    entry.getFile(
      fileName,
      { create: true, exclusive: false },
      (file: File) => resolve(file),
      () => reject(false)
    );
  });
}

/** 写入文件 */
function writeFile(file: File, data: string): Promise<boolean> {
  return new Promise(resolve => {
    file.createWriter(
      (writer: Writer) => {
        writer.onwrite = () => resolve(true);
        writer.write(data);
      },
      () => resolve(false)
    );
  });
}

/** 读取目录下文件列表 */
function readFileListFromDirectory(entry: Entry): Promise<Entry[]> {
  return new Promise((resolve, reject) => {
    const directoryReader = entry.createReader();
    directoryReader.readEntries(
      (entries: Entry[]) => resolve(entries),
      () => reject(false)
    );
  });
}

/** 导出数据到本地 */
async function writeFileToLocalDevice(data: string): Promise<boolean> {
  const filePath = '/storage/emulated/0/Download/';
  const fileName = `todo_backup_${new Date().valueOf()}.json`;
  try {
    const entry = await resolveFileSystem(filePath);
    // if (!entry.isFile) {
    //   return Promise.resolve(false);
    // }
    const file = await getFile(entry, fileName);
    await writeFile(file, data);
    return Promise.resolve(true);
  } catch {
    return Promise.resolve(false);
  }
}

/** 读取本地download文件夹文档 */
async function readLocalFileSystem(): Promise<string[]> {
  const filePath = '/storage/emulated/0/Download/';
  try {
    const entry = await resolveFileSystem(filePath);
    // if (!entry.isDirectory) {
    //   return Promise.reject(false);
    // }
    const entries = await readFileListFromDirectory(entry);
    return Promise.resolve(
      entries
        .filter(entry => entry.isFile && entry.name.indexOf('.json') > -1)
        .map(x => x.name)
    );
  } catch {
    return Promise.reject(false);
  }
}

export { writeFileToLocalDevice, readLocalFileSystem };
