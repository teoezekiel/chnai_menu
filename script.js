// $(".slide-box-switch").click(function () {
//     $(this).toggleClass("active");
//     let status = $(this).hasClass("active");
//     if(status){
//         $(".slide-box-container").animate({left:0},500,function () {
//             $(".slide-box-switch i").removeClass("close").addClass("open");
//         });
//     }else{
//         $(".slide-box-container").animate({left:"-326px"},500,function () {
//             $(".slide-box-switch i").removeClass("open").addClass("close");
//         });
//     }
// });


    const address = document.getElementById('address');

    address.addEventListener('mouseover', () => {
    address.style.transform = 'scale(1)';
    });

    address.addEventListener('mouseout', () => {
    address.style.transform = 'scale(1)';
    });