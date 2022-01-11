function slowTask() {
  /*takes 2 seconds to process*/
  var now = new Date().getTime();
  while (new Date().getTime() < now + 2000) {
    /* processing */
  }

  console.log("slow task finished");
}

function fastTask() {
  console.log("fast task finished");
}

function init() {
  fastTask();
  slowTask();
  fastTask();
  fastTask();
  fastTask();
}


init();