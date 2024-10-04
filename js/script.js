var textarea = document.getElementById('textarea');
var count = document.getElementById('count');
var maxlen = document.getElementById('maxlen');


textarea.addEventListener('keyup',()=>{
    counter();
});
function counter()
{
    var len = textarea.value.length;
    count.innerHTML=len;
    maxlen.innerHTML = textarea.getAttribute("maxlength")-len;
}