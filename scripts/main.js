(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-2946000-2', 'joseotavio.com');
ga('send', 'pageview');

$(function(){
    $('.tag-item-name').each(function(){
        var content = $(this).html();
        var link = $('<a>').attr('href', '/tags/#' + content).html(content);
        $(this).html('');
        $(this).append(link);
    });
});