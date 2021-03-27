
let date = new Date();

let h = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]
let b= ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
let hari= date.getDay();
let bulan= date.getMonth();
let tanggal= date.getDate();
let tahun= date.getFullYear();

let tgl = h[hari] + "," +tanggal+ " " +b[bulan]+" "+tahun

document.getElementById('tanggal').innerHTML = tgl

function wkt()
{
    let date = new Date
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();

    let waktu = jam + ":" + menit + ":" + detik
    document.getElementById('time').innerHTML = waktu
}
setInterval(wkt, 1000)
