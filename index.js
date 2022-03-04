// 画像ダウンロード
function downloadImg(){
  // ファイル情報
  const url = '銀河鉄道の夜.png';
  const fileName = '銀河鉄道の夜.png';

  // IE用
  if(window.navigator.msSaveOrOpenBlob){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = function(){
      if(xhr.status !== 200){
        return false;
      }
      window.navigator.msSaveOrOpenBlob(xhr.response, fileName);
    }
    xhr.send();
  }else{ // Chromeなど
    let link = document.getElementById("download");
    link.href= url;
    link.download = fileName;
  }
}