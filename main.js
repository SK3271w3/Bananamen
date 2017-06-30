document.getElementById('go').onclick = function() {
var  inputText = $('#text-input').val();
var dawgifiedText = inputText + ", so I rate it 5 stars"
document.getElementById('output').innerHTML = dawgifiedText;
};