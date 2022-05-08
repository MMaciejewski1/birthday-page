function showPages(id){
    var totalNumberOfPages = 5;
    console.log('page'+id)
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
    var id = 0;
    showPages(id);
    id++;
    setInterval(function() {showPages(id);(id<6)?id++:id=0;}, 10000);
}