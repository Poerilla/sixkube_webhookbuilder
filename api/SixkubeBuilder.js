module.exports = function() {
  const exec = require("child_process").exec;
  return {
    build: function() {
        let command = "echo 'Building sixkube container'"
        exec(command, function(error, stdout, stderr) {
          if (error) {
            console.log({ error: stderr });
            return;
          }
          console.log({ data: stdout });
        });
    }
  };
};
