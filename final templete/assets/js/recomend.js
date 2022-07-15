
var imagetop = new Array();
imagetop[0] = "C:/Users/limhs/OneDrive/문서/GitHub/finalcloset/Closet/final templete/assets/img/topimg1.jpg";
imagetop[1] = "C:/Users/limhs/OneDrive/문서/GitHub/finalcloset/Closet/final templete/assets/img/topimg2.jpg";
imagetop[2] = "C:/Users/limhs/OneDrive/문서/GitHub/finalcloset/Closet/final templete/assets/img/topimg3.jpg";
imagetop[3] = "C:/Users/limhs/OneDrive/문서/GitHub/finalcloset/Closet/final templete/assets/img/topimg4.jpg";
imagetop[4] = "C:/Users/limhs/OneDrive/문서/GitHub/finalcloset/Closet/final templete/assets/img/topimg5.jpg";
imagetop[5] = "C:/Users/limhs/OneDrive/문서/GitHub/finalcloset/Closet/final templete/assets/img/topimg6.jpg";

index = Math.floor(Math.random() * imagetop.length);
document.write("<img src='" + imagetop[index] + "' border=0>");
