// @ts-nocheck
class SoftlyService {
  loadScript() {
    (function () {
      var st = function () {
        st.c(arguments);
      };

      st.q = [];

      st.c = function (args) {
        st.q.push(args);
      };

      window.Softly = st;

      var s = document.createElement("script");
      s.type = "module";
      s.defer = true;
      s.src = "http://localhost:3001/src/main.ts";
      var x = document.getElementsByTagName("script")[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    })();
  }

  init(option) {
    window.Softly("init", option);
  }
}

export default new SoftlyService();