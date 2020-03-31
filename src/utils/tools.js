import { Toast } from "vant";
import { Vue } from "vue-property-decorator";
Vue.use(Toast);

// TODO 改写为TS
// TODO 失败成功提示
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
                Toast("Write data success!");
                // console.log("Write data success!");
              };
              writer.write(JSON.stringify(data));
            },
            function(e) {
              // console.log(e.message);
            }
          );
        },
        function() {
          Toast("get file failed");
          // console.log("get file failed");
        }
      );
    },
    function() {
      Toast("get file failed");
      // console.log("resolve file failed");
    }
  );
}

export default {
  writeLocalFile: writeLocalFile
};
