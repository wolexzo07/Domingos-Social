// https://docs.embed.ly/docs/oembed

// jQuery
$.getJSON('https://api.embedly.com/1/oembed?' + $.param({
  url: 'https://www.youtube.com/watch?v=jofNR_WkoCE',
  key: ":key"
}));

// jQuery Embedly 
$.embedly.oembed('https://www.youtube.com/watch?v=jofNR_WkoCE', {key: ":key"});

curl "http://api.embedly.com/1/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjofNR_WkoCE&key=:key"


{
  "type": "video",
  "url": "http://www.youtube.com/watch?v=jofNR_WkoCE",
  "provider_name": "YouTube",
  "provider_url": "https://www.youtube.com/", 
  "title": "Ylvis - The Fox (What Does The Fox Say?) [Official music video HD]",
  "description": "iTunes: http://smarturl.it/YlvisFox Fra I kveld med Y...", 
  "author_name": "TVNorge",
  "author_url": "https://www.youtube.com/user/tvnorge",
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FjofNR_WkoCE%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjofNR_WkoCE&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjofNR_WkoCE%2Fhqdefault.jpg&key=internal&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" frameborder=\"0\" allowfullscreen></iframe>",
  "width": 854,
  "height": 480, 
  "thumbnail_url": "https://i.ytimg.com/vi/jofNR_WkoCE/hqdefault.jpg", 
  "thumbnail_width": 480,
  "thumbnail_height": 360,
  "version": "1.0"
}