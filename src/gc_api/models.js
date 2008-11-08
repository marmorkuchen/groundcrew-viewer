Agents = new Resource('Agent', {
  enhancer: function(item) { Item.calculate_fields(item); }
});

Landmarks = new Resource('Landmark', {
  load_by_city_id: function(city_id) {
    $.ajax({
      url: '/gc/viewer_city.js',
      data: {city_id: city_id},
      async: false,
      success: function(obj){ eval(obj); }
    });
  }
});

Ideas = new Resource('Idea');