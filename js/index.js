// FAQ SECTION
$("a.accordion-link").click(function()
{
  var abc = $(".hiding-property.fa-chevron-down").attr('class');
  var ichange1 = "";
  var ichange2 = "";
  var ichange3 = "";
  if(abc!=null)
  {
    ichange1 = ".faq-icon-down-"+$(".hiding-property.fa-chevron-down").attr('class').slice(12,13);
    ichange2 = ".accordion-answer-"+$(".hiding-property.fa-chevron-down").attr('class').slice(12,13);
    ichange3 = "."+$(".hiding-property.fa-chevron-down").attr('class').slice(0,13);
    $(ichange2).slideUp(300,function()
    {
      $(ichange1).toggleClass("hiding-property");
      $(ichange2).toggleClass("is-visible");
      $(ichange3).toggleClass("hiding-property");
     });
  }
  var iconChange1 = ".faq-icon-up-"+$(this).attr("id");
  var iconChange2 = ".faq-icon-down-"+$(this).attr("id");
  var answerDisplay = ".accordion-answer-"+$(this).attr("id");
  if(ichange1!=iconChange2)
  {
    $(answerDisplay).slideDown(300,function()
    {
      $(answerDisplay).toggleClass("is-visible");
      $(iconChange1).toggleClass("hiding-property");
      $(iconChange2).toggleClass("hiding-property");
    });
  }
});
// FAQ SECTION
// GET STARTED SECTION
$(".get-started-movement").click(function()
{
  var abcd = $(this).attr('id').slice(0,5);
  var abc = $(".carousel-item.is-visible").attr('id');
  var ab;
  if(abcd=="right")
    ab = (abc.slice(3,4)+1)%3;
  else
    ab = (abc.slice(3,4)-1)%3;
  if(ab==0)
    ab = 3;
  ab = "#div"+ab;
  abc = "#"+abc;
  $(abc).toggleClass("is-visible");
  $(ab).toggleClass("is-visible");
  $(".nav-link.active-link").toggleClass("active-link");
  $("#link-"+ab.slice(4,5)).toggleClass("active-link");
});
$(".get-started-navlink").click(function()
{
  var abcd = $(this).attr('id');
  var abc = "#" + $(".carousel-item.is-visible").attr('id');
  var ab = "#div"+abcd.slice(5,6);
  var aba = "#link-"+abcd.slice(5,6);
  $(abc).toggleClass("is-visible");
  $(ab).toggleClass("is-visible");
  $(".nav-link.active-link").toggleClass("active-link");
  $(aba).toggleClass("active-link");
});
// GET STARTED SECTION

// $(".Navbar__Button .Navbar-button").click(function()
// {
//   fetch('D:\DC downloads\Tutorials\[FreeCourseSite.com] Udemy - The Complete 2020 Web Development Bootcamp\Web Development\SaveMoney\waitlist\waitlist-register.html');
// });
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
/*TESTIMONIAL SECTION*/

  const slider = tns({
    container: '.my-slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    speed: 500,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    edgePadding:50,
    controlsContainer: "#customize-controls",
    responsive: {
        640: {
            items: 2,
            speed:500
        },

        768: {
            items: 3,
            speed:500
        }
    }

  });
// TESTIMONIAL SECTION
// API INTEGRATION
$(".submit-button").click(function(e)
{
  e.preventDefault();
  var emailAddress = $(".input-text").val();
  var dataValues =
  {
    "email": emailAddress,
    "referee_code": "aQMmmM"
  };
  console.log(dataValues);
    $.ajax({
      type: 'POST',
      url: 'http://3.6.181.80:8000/api/v1/iam/waitlist/create-exists/',
      data: JSON.stringify(dataValues),
      contentType: 'application/json',
      success: function(result)
      {
          window.location.href = "file:///D:/DC%20downloads/Tutorials/[FreeCourseSite.com]%20Udemy%20-%20The%20Complete%202020%20Web%20Development%20Bootcamp/Web%20Development/SaveMoney/waitlist/waitlist.html";
      },
      error: function()
      {
        alert("There was a problem registering. Please try again in some time.");
      }
    });
});
$(".submit-button-1").click(function(e1)
{
  e1.preventDefault();
  var emailAddress1 = $(".input-text-2").val();
  var dataValues1 =
  {
    "email": emailAddress1,
    "referee_code": "aQMmmM"
  };
  console.log(dataValues1);
    $.ajax({
      type: 'POST',
      url: 'https://89b4e45cfe85.ngrok.io/api/v1/iam/waitlist/create-exists/',
      data: JSON.stringify(dataValues1),
      contentType: 'application/json',
      success: function(result)
      {
          window.location.href = "file:///D:/DC%20downloads/Tutorials/[FreeCourseSite.com]%20Udemy%20-%20The%20Complete%202020%20Web%20Development%20Bootcamp/Web%20Development/SaveMoney/waitlist/waitlist.html";
      },
      error: function()
      {
        alert("There was a problem registering. Please try again in some time.");
      }
    });
});
