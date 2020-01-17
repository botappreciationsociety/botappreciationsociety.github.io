$(document).ready(function(){


    $.expr[':'].Contains = function(x, y, z){
        return jQuery(x).text().toUpperCase().indexOf(z[3].toUpperCase())>=0;
    };


    $(function(){

        $.getJSON('botpages.json', function(data){
            $.each(data, function(i,page){
                var botcardlist = ['<div class="container page-card d-none d-lg-block',
                '<div class="row">',
                '<div class="col-12 mt-3">',
                '<div class="card">',
                '<div class="card-horizontal">',
                '<div class="img-square-wrapper p-1 m-3 border border-primary rounded-circle">',
                '<img class="rounded-circle" src="' + '../pagedps/default.png' + '" style="height: 80px; width: 80px;" alt="Profile picture">',
                '</div>',
                '<div class="card-body text-truncate">',
                '<h3 class="d-inline card-title font-weight-bold" title="' + page.title + '">' + page.title + '</h3>',
                '<h4 style="margin-top: .375rem;">',
                '</h4>',
                '</div>',
                '<div class="card col-auto align-middle" style="margin: 1.225rem; border: none;">',
                '<div class="card-body">',
                '<a class="btn btn-primary" href="' + page.fb_link + '" role="button" target="_blank">Facebook</a>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '</div>'];
                var botcardxslist = ['<div class="card d-block d-lg-none">',
                 '<div class="card-body">',
                 '<div class="d-flex flex-items-center flex-justify-center flex-auto">',
                 '<div class="border border-primary rounded-circle" style="margin: 1.5rem auto 1.5rem auto; max-width: 50%; height: 50%; overflow: hidden;">',
                 '<img class="card-img-top" style="height: 150px; width: 150px" src="' + page.dp_id + '" alt="Profile pic">',
                 '</div>',
                 '</div>',
                 '<h5 class="card-title">' + page.title + '</h5>',
                 '<h5>',
                 '</h5>',
                 '<div class="card col-auto text-center" style="margin: 0.25rem; border: none;">',
                 '<div class="card-body text-center" style="padding: 0.125rem 15% 0.1 25rem 15%;">',
                 '<a class="btn btn-primary float-left" href="' + page.fb_link + '" role="button" target="_blank">Facebook</a>',
                 '</div>',
                 '</div>',
                 '</div>',
                 '</div>'];

                if (page.github === undefined) {
                    gitbutton = '<a class="btn btn-secondary float-right float-lg-none disabled" href="' + page.github + '" role="button" target="_blank">Github</a>';
                    botcardlist.splice(16, 0, gitbutton)
                    botcardxslist.splice(13, 0, gitbutton)
                } else {
                    gitbutton = '<a class="btn btn-primary float-right float-lg-none" href="' + page.github + '" role="button" target="_blank">Github</a>';
                    botcardlist.splice(16, 0, gitbutton)
                    botcardxslist.splice(13, 0, gitbutton)
                    botcardlist[0] += " github-tag"
                }
                var tags = page.tags;
                $.each(tags, function(j, tag){
                    if (tag=="Interactive") {
                        badge = '<span class="badge badge-interactive" style="margin: 0.062rem;">Interactive</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " interactive-tag"
                    } else if (tag=="3D") {
                        badge = '<span class="badge badge-3d" style="margin: 0.062rem;">3D</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " 3d-tag"
                    } else if (tag=="Video") {
                        badge = '<span class="badge badge-video" style="margin: 0.062rem;">Video</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " video-tag"
                    } else if (tag=="Image") {
                        badge = '<span class="badge badge-image" style="margin: 0.062rem;">Image</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " image-tag"
                    } else if (tag=="Text") {
                        badge = '<span class="badge badge-text" style="margin: 0.062rem;">Text</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " text-tag"
                    } else if (tag=="Dead") {
                        badge = '<span class="badge badge-dead" style="margin: 0.062rem;">Dead</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " dead-tag"
                    } else if (tag=="Alive") {
                        badge = '<span class="badge badge-alive" style="margin: 0.062rem;">Alive</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardxslist.splice(9, 0, badge);
                        botcardlist[0] += " alive-tag"
                    };
                })
                botcardlist[0] += '">'
                $('.loading-bots').hide()
                $('main').append(botcardlist.join("\n"));
                $('main').append(botcardxslist.join("\n"));
                $('.dead-tag').attr('style','display:none !important');
            });
        });
    });

    $('#tagselect').change(function() {
        $('.page-card').attr('style','display:none !important');
        if ($(this).val() != "none") {
            $('.' + $(this).val()).attr('style','');;
        } else {
            $('.page-card').attr('style','');;
        };
    });

    $("#search-button").click(function() {
      $('.page-card').attr('style','display:none !important');;
      $('.page-card:Contains(' + $("#bot-search").val() + ')').attr('style','');;
      var filterbtns = ["github", "interactive", "alive", "dead", "3d", "video", "image", "text"];
      $.each(filterbtns, function(index, tag){
        $("#" + tag + "-checkbox").prop('checked', false);
        $(".btn-tag-" + tag).removeClass("active")
      });
    });

    $("#clear-button").click(function() {
      $('#bot-search').val("")
      $('.page-card').attr('style','');;
      var filterbtns = ["github", "interactive", "alive", "dead", "3d", "video", "image", "text"];
      $.each(filterbtns, function(index, tag){
        $("#" + tag + "-checkbox").prop('checked', false);
        $(".btn-tag-" + tag).removeClass("active")
      });
    });

    $(".btn-tag-dead").click(function() {
      if ($("#alive-checkbox").is(":checked")) {
        $('#alive-checkbox').prop('checked', false);
        $(".btn-tag-alive").removeClass('active')
      };
    });

    $(".btn-tag-alive").click(function() {
      if ($("#dead-checkbox").is(":checked")) {
        $('#dead-checkbox').prop('checked', false);
        $(".btn-tag-dead").removeClass('active')
      };
    });

    $(".btn-botfilter").click(function() {
      var tags = ["github", "interactive", "alive", "dead", "3d", "video", "image", "text"];
      var classes = $(this).attr('class').split(/\s+/);
      var tag_type = classes[2].slice(8);
      var visible = [];
      var hidden = [];
      $.each(tags, function(index, tag){
        if (!(tag === tag_type)) {
          if ($("#" + tag + "-checkbox").is(":checked")) {
            visible.push("." + tag + "-tag");
          } else {
            hidden.push("." + tag + "-tag");
          };
        } else {
          if ($("#" + tag + "-checkbox").is(":checked")) {
            hidden.push("." + tag + "-tag");
          } else {
            visible.push("." + tag + "-tag");
          };
        }
      });

      $(".page-card").attr('style','display:none !important');;
      if (visible.length > 0) {
        $(visible.join("") + ':Contains(' + $("#bot-search").val() + ')').attr('style','');;
      } else {
        $(".page-card").attr('style','');;
      }
    });
});