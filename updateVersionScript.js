const { writeFileSync } = require('node:fs');
const { exec } = require('node:child_process');


// A function that executes a command on the command line
const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};

// Function that updates version.json and adds last_command_time
const updateVersion = async () => {
  try {
    // Get the hash of the last commit
    const lastCommitHash = await executeCommand('git rev-parse HEAD');

    // Get the current UTC time
    const lastCommandTime = new Date().toUTCString();

    // Create an object with version information
    const versionInfo = {
      last_commit: lastCommitHash, 
      last_command_time: lastCommandTime, 
    };

    // Write versionInfo to version.json
    writeFileSync('./public/version.json', JSON.stringify(versionInfo, null, 2));
    console.log('The version.json file has been successfully updated.');
  } catch (error) {
    console.error('Error while updating version.json:', error);
  }
};

updateVersion();