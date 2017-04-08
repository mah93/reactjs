#  reactjs     
* ##  react-dva
  基于react+dva+antd的一个demo      

  ### 运行方法 
  ```js
  $npm install

  $npm start

  ```
  ```.roadhogrc
    "proxy": {
      "/api": {
        "target": "http://api.jisuapi.com/",
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
      }
    },
  ```

  成功启动后自动打开 http://localhost:8000 可以在控制台中看到fetch请求结果

  ### 参考资料

  * 关于dva请参考[这里](https://github.com/dvajs/dva)

  * 关于antd请参考[这里](https://ant.design/index-cn)

  * 关于react请参考[这里](https://github.com/facebook/react)
