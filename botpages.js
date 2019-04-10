$(document).ready(function(){
    $(function(){
        $.getJSON('botpages.json',function(data){
            $.each(data, function(i,page){
                var botcard = ['<div class="container">',
                '<div class="row">',
                '<div class="col-12 mt-3">',
                '<div class="card">',
                '<div class="card-horizontal">',
                '<div class="img-square-wrapper p-1 m-3 border border-primary rounded-circle">',
                '<img class="rounded-circle" src="' + page.dp_link + '" style="width: 150px; height: 150px;" alt="Profile picture">',
                '</div>',
                '<div class="card-body">',
                '<h4 class="card-title">' + page.title + '</h4>',
                '<p class="card-text">' + page.desc + '</p>',
                '<div class="container-fluid">',
                '<a class="btn btn-primary" href="' + page.fb_link + '" role="button" target="_blank">Facebook</a>',
                '<div class="d-inline p-2 m-2 card-text text-info"> Bot created by: ' + page.admin + ' </div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>'
                ].join("\n");
                $('main').append(botcard);
            });
        }).error(function(){
            console.log('error');
        });
    });
});