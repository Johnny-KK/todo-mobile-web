function writeLocalFile(data) {
  const filePath = "/storage/emulated/0/Download/";
  const fileName = `todo_backup_${new Date().valueOf()}.json`;

  window.plus.io.resolveLocalFileSystemURL(
    filePath,
    function(entry) {
      entry.getFile(
        fileName,
        {
          create: true,
          exclusive: false
        },
        function(file) {
          file.createWriter(
            function(writer) {
              writer.onwrite = function() {
                console.log("Write data success!");
              };
              writer.write(data);
            },
            function(e) {
              console.log(e.message);
            }
          );
        },
        function() {
          console.log("get file failed");
        }
      );
    },
    function() {
      console.log("resolve file failed");
    }
  );
}

export default {
  writeLocalFile: writeLocalFile
};
