let x = 0;
function showPages(id){
    var totalNumberOfPages = 5;
    x=id;
    for(var i=0; i<=totalNumberOfPages; i++){
        if (document.getElementById('page'+i)) {
            document.getElementById('page'+i).style.display='none';
        }
    }
        if (document.getElementById('page'+id)) {
            document.getElementById('page'+id).style.display='block';
        }
};
document.onreadystatechange = function () {
    var id = x;
    showPages(id);
    id++;
    setInterval(function() {showPages(id);(id<5)?id++:id=0;}, 10000);
    const slider = document.getElementById('slider')
    slider.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
      })
      
      slider.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        handleGesture()
      })
}

let touchstartX = 0
let touchendX = 0


function handleGesture() {
  if (touchendX < touchstartX) (x==0)?x=5:x--;
  if (touchendX > touchstartX) (x>5)?x=0:x++;
  showPages(x);
  console.log(x);
}

