module.exports = {
  port: 8080,
  files: ["./build/**/*.*"],
  https : true,
  server: {
    baseDir: "./build",
    middleware : { 1 : require('compression')() }
  }
}
