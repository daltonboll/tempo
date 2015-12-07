(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/activities/activity"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<style>\n\t/*Activity module*/\n  @media screen and (max-width: 675px) {\n      .activity {\n          width: 300px;\n      }\n  }\n\n  .jumbotron {\n    padding: 0;\n    min-height: 500px;\n    position: relative;\n  }\n\n  .activity {\n    position: relative;\n    top: 45px;\n    margin: 0 auto;\n    width: 90%;\n    min-height: 500px;\n    max-height: 800px;\n    background-color: white;\n    border: 1px solid #ddd;\n    box-shadow: 1px 1px 1px #eee;\n    border-top-left-radius: 5px;\n  \tborder-top-right-radius: 5px;\n  }\n\n  .activity header {\n    position: relative;\n    top: 0;\n    height: 12%;\n    background-color: rgb(31, 137, 229);\n    color: white;\n  }\n\n  .activity header h3 {\n  \tmargin: 0;\n    padding: 7px;\n  \tline-height: 23px;\n  }\n\n  /*TODO: Fix adjusting section container*/\n  .activity section {\n  \theight: 90%;\n    max-height: 375px;\n  \toverflow: hidden;\n  \tmargin-bottom: 0;\n    padding: 10px;\n\n  }\n\n  .activity section p {\n  \toverflow: scroll;\n  \theight: 100%;\n    width: 100%;\n  \tfont-family: \'Lato\', sans-serif;\n    font-weight: 300;\n  \tfont-size: 100%;\n  \tmargin: 10px;\n    padding: 10px;\n  }\n\n  .activity section .thumbnail {\n    height: 90%;\n    width: 100%;\n    max-height: 365px;\n    overflow: scroll;\n    position: relative;\n    border: none;\n    font-size: 18px;\n  }\n\n  .activity section .content-video {\n    text-align: center;\n  }\n\n  .activity section .likeContainer {\n  \tmargin: 10px;\n  \tmargin-bottom: 0;\n  }\n\n  .activity footer {\n  \tbackground-color: #f5f5f5;\n  \tposition: absolute;\n  \theight: 20%;\n  \tbottom: 0;\n  \tborder: 1px solid #ddd;\n  }\n\n  .activity footer a {\n  \tposition: relative;\n  \ttop: 10px;\n  \ttext-decoration: none;\n  \tcolor: #2980B9;\n  }\n\n  .activity footer a:hover {\n  \tbackground-color: #f5f5f5;\n  \tcolor: #2980B9;\n  \topacity: .7;\n  }\n\n  #like-count {\n    color: rgb(92, 184, 92);\n    margin-right: 45px;\n  }\n\n  #dislike-count {\n    color: rgb(217, 83, 79);\n  }\n\n  .like-btn {\n    background-color: rgb(92, 184, 92);\n    border-color: rgb(92, 184, 92);  \n  }\n\n  .like-btn:hover, .like-btn:active, .like-btn:visited, .like-btn:focus {\n    background-color: #198A00;\n    outline: none;\n  }\n\n  .dislike-btn {\n    background-color: rgb(217, 83, 79);\n    border-color: rgb(217, 83, 79);\n  }\n\n    .dislike-btn:hover, .dislike-btn:active, .dislike-btn:visited, .dislike-btn:focus {\n    background-color: #9D251B;\n    outline: none;\n  }\n\n  .likeContainer {\n\n  }\n\n  .likeContainer button:hover {\n  \topacity: .8;\n  \tcursor: pointer;\n  }\n\n\n  .linkContainer {\n    margin-top: -35px;\n    padding-left: 10px;\n    padding-right: 10px; \n  }\n\n  a:hover {\n  \tbackground-color: transparent;\n    font-size: 100%;\n  }\n\n  #share {\n    float: right;\n    cursor: pointer;\n  }\n\n  #back {\n    float: left;\n  }\n\n  #link {\n    position: relative;\n    top: 40px;\n  }\n</style>\n\n\n<div class="jumbotron activity">\n  <header>\n      <h3 id="title">',  title ,'</h3>\n  </header>  \n\n  <section>\n    <div class="thumbnail">\n      <!-- <img src="..." alt="..."> -->\n      <div class="caption">\n        <div id="content">',  content ,'</div>\n      </div>\n    </div>\n  </section>\n\n  <footer>\n      <span id="likes"><span id="like-count">',  likes ,'</span></span>\n      <span id="dislikes"><span id="dislike-count">',  dislikes ,'</span></span>\n      <br>\n      <button class=\'btn btn-primary like-btn\' role="button">Like</button>\n      <button class=\'btn btn-primary dislike-btn\' role="button">Dislike</button><br>  \n      <div class="linkContainer">\n        <a id="back" href=\'',  backLink ,'\' id=\'back\'> Back </a>   \n        <a id="share"> Share </a>\n  \n      </div>\n      <div class="content-link"><a id="link" href=\'',  link ,'\' target="_blank"> Link </a></div>\n  </footer>\n</div>\n');}return __p.join('');};
}).call(this);