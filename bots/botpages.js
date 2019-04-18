$(document).ready(function(){


    $.expr[':'].Contains = function(x, y, z){
        return jQuery(x).text().toUpperCase().indexOf(z[3].toUpperCase())>=0;
    };


    $(function(){

        $.getJSON('botpages.json', function(data){
            $.each(data, function(i,page){
                var botcardlist = ['<div class="container page-card',
                '<div class="row">',
                '<div class="col-12 mt-3">',
                '<div class="card" style="max-height: 200px;">',
                '<div class="card-horizontal">',
                '<div class="img-square-wrapper p-1 m-3 border border-primary rounded-circle">',
                '<img class="rounded-circle" src="' + page.dp_link + '" style="height: 80px; width: 80px;" alt="Profile picture">',
                '</div>',
                '<div class="card-body text-truncate col-8">',
                '<h3 class="d-inline card-title font-weight-bold" >' + page.title + '</h3>',
                '<h4 style="margin-top: .375rem;">',
                '</h4>',
                '</div>',
                '<div class="card col-auto" style="margin: 1.225rem; border: none;">',
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
                if (page.github === undefined) {
                    gitbutton = '<a class="btn btn-secondary disabled text-muted" href="' + page.github + '" role="button" target="_blank">Github</a>';
                    botcardlist.splice(16, 0, gitbutton)
                } else {
                    gitbutton = '<a class="btn btn-primary" href="' + page.github + '" role="button" target="_blank">Github</a>';
                    botcardlist.splice(16, 0, gitbutton)
                }
                var tags = page.tags;
                $.each(tags, function(j, tag){
                    if (tag=="Interactive") {
                        badge = '<span class="badge badge-interactive" style="margin: 0.062rem;">Interactive</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardlist[0] += " interactive-tag"
                    } else if (tag=="Video") {
                        badge = '<span class="badge badge-video" style="margin: 0.062rem;">Video</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardlist[0] += " video-tag"
                    } else if (tag=="Image") {
                        badge = '<span class="badge badge-image" style="margin: 0.062rem;">Image</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardlist[0] += " image-tag"
                    } else if (tag=="Text") {
                        badge = '<span class="badge badge-text" style="margin: 0.062rem;">Text</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardlist[0] += " text-tag"
                    } else if (tag=="Dead") {
                        badge = '<span class="badge badge-dead" style="margin: 0.062rem;">Dead</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardlist[0] += " dead-tag"
                    } else if (tag=="Alive") {
                        badge = '<span class="badge badge-alive" style="margin: 0.062rem;">Alive</span>'
                        botcardlist.splice(11, 0, badge);
                        botcardlist[0] += " alive-tag"
                    };
                })
                botcardlist[0] += '">'
                $('.loading-bots').hide()
                $('main').append(botcardlist.join("\n"));
            });
        });
    });

    $('#tagselect').change(function() {
        $('.page-card').hide();
        if ($(this).val() != "none") {
            $('.' + $(this).val()).show();
        } else {
            $('.page-card').show();
        };
    });

    $("#search-button").click(function() {
      $('.page-card').hide();
      $('.page-card:Contains(' + $("#bot-search").val() + ')').show();
      var filterbtns = ["interactive", "alive", "dead", "video", "image", "text"];
      $.each(filterbtns, function(index, tag){
        $("#" + tag + "-checkbox").prop('checked', false);
        $(".btn-tag-" + tag).removeClass("active")
      });
    });

    $("#clear-button").click(function() {
      $('#bot-search').val("")
      $('.page-card').show();
      var filterbtns = ["interactive", "alive", "dead", "video", "image", "text"];
      $.each(filterbtns, function(index, tag){
        $("#" + tag + "-checkbox").prop('checked', false);
        $(".btn-tag-" + tag).removeClass("active")
      });
    });

    $(".btn-botfilter").click(function() {
      var tags = ["interactive", "alive", "dead", "video", "image", "text"];
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

      $(".page-card").hide();
      if (visible.length > 0) {
        $(visible.join("") + ':Contains(' + $("#bot-search").val() + ')').show();
      } else {
        $(".page-card").show();
      }
    });
});