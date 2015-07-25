(function() {
  accurateInterval = function(time, fn) {
    var cancel, nextAt, timeout, wrapper, _ref;
    nextAt = new Date().getTime() + time;
    timeout = null;
    if (typeof time === 'function') _ref = [time, fn], fn = _ref[0], time = _ref[1];
    wrapper = function() {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function() {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };
}).call(this);

function start_timer(){
  if (!timer)
  {
    var timer = accurateInterval(1000 * 60 / 126, function() {
      postMessage("beat");
    });
    //  var timer = accurateInterval(250 * 15 / 126, function() {
    //   postMessage("beat");
    // });
  }
};
start_timer();
