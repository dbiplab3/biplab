module.exports=function(grunt){
    grunt.initConfig({
        ts:{
            default:{
                src:["**/*.ts", "!node_module/**/*.ts"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default",["ts"]);
}