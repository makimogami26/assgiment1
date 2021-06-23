const article = [
    {
        title:"WoW Fakta Elon Musk X Tesla X Bitcoin autocuan",
        content : "Fakta Elon Musk Dengan tesla dengan spaceX dan bitcoin apa hubungannya? Pengen tau ya?? klik lah",
        author: "Author : Dimas",
        publish: "Date : March 4 , 2021",
        link:"./postpage.html",
        image:"/home/klee/Assigment 1/img/2 fakta.jpeg"
    },
    {
        title:"Cara cepat kaya bermain Crypto",
        content : "Pada tahun 2011 bitcoin diluncurkan dengan harga 1$ pada tahun 2021 sekarang harga bitcoin 54000$ betapa membangongkan bukan? yuk simak",
        author: "Author : Imay",
        publish: "Date : June 19 , 2021",
        link:"./postpage2.html",
        image:"/home/klee/Assigment 1/img/kripto.jpg",
    },
    {
        title:"Hal-hal Menyebalkan dari Video Game Zaman Dulu ",
        content : "Vieo game yang kita senangi sekarang ini bukanlah hal yang terjadi begitu saja, melainkan hasil dari perkembangan bertahap.",
        author: "Author : Orang keren",
        publish: "Date : June 20 , 2021",
        link:"./postpage3.html",
        image:"/home/klee/Assigment 1/img/postpage3.jpg",
    },
]
    $(document).ready(function(){
                            
            for(let i = 0; i < article.length; i++){
                const postpreviewtemplate = `
        
                 <h2><a href="${article[i].link}">${article[i].title}</a></h2>
                     <img src="${article[i].image}" alt="slideatas"></a>
                          <div class="pt-5"></div>
                          <p><span class="font-small">${article[i].publish}</span></p>
                             <p><span class="font-small">${article[i].author}</span> </p>
                             <p><strong>${article[i].content}.</strong></pl>
                             
                          <div class="margin-top-20">
                               <a class="btn" href="${article[i].link}"><p style="color:blue">ReadMore</p></a>
                               `
            
        
                
                                  $("#postpreview").append(postpreviewtemplate);
            }
        })
     




    //Untuk notifikasi maap berantakan dari html soalnya
    $(document).ready(function(){
        $('#show-notification').on('click',function(){
        $('.notification').fadeIn(1000);
        setTimeout(function(){
            $('.notification').show();
        });
    });
    $(document).ready(function(){
        $('.notification').on('click',function(){
        $('.notification').fadeOut(1000);
        setTimeout(function(){
            $('.notification').hide();
        });
    });
});
}); 