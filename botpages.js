$(document).ready(function(){
    $(function(){
        $.getJSON('botpages.json', function(data){
            $.each(data, function(i,page){
                var botcardlist = ['<div class="container">',
                '<div class="row">',
                '<div class="col-12 mt-3">',
                '<div class="card" style="max-height: 200px;">',
                '<div class="card-horizontal">',
                '<div class="img-square-wrapper p-1 m-3 border border-primary rounded-circle">',
                '<img class="rounded-circle" src="' + page.dp_link + '" style="height: 80px; width: 80px;" alt="Profile picture">',
                '</div>',
                '<div class="card-body">',
                '<h3 class="d-inline card-title">' + page.title + '</h3>',
                '<h4 style="margin-top: .375rem;">',
                '</h4>',
                '</div>',
                '<div class="card" style="margin: 1.225rem; border: none;">',
                '<div class="card-body">',
                '<a class="btn btn-primary" href="' + page.fb_link + '" role="button" target="_blank">Facebook</a>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>'];
                var tags = page.tags;
                $.each(tags, function(j, tag){
                    if (tag=="Interactive") {
                        imagebadge = '<span class="badge badge-info" style="margin: 0.062rem;">Interactive</span>'
                        botcardlist.splice(11, 0, imagebadge);
                    } else if (tag=="Image") {
                        imagebadge = '<span class="badge badge-success" style="margin: 0.062rem;">Image</span>'
                        botcardlist.splice(11, 0, imagebadge);
                    } else if (tag=="Text") {
                        imagebadge = '<span class="badge badge-dark" style="margin: 0.062rem;">Text</span>'
                        botcardlist.splice(11, 0, imagebadge);
                    };
                })
                $('main').append(botcardlist.join("\n"));
            });
        }).error(function(){
            console.log('error');
        });
    });
});