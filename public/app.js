// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    return $('.btn.delete').click(function() {
      $.ajax({
        url: $(this).attr('href'),
        type: 'DELETE',
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          return location.href = '/';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log(textStatus);
        }
      });
      return false;
    });
  });

}).call(this);