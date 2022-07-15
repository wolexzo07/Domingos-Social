jquery-collage
==============

A collage plugin for jquery. Allows you to make little collages out of a collection of images on your website.

You can view more about this plugin at my website (and see a demo): 
http://www.keltdockins.com/2/post/2012/08/jquery-collage-plugin.html


```javascript
<script type="text/javascript">
  jQuery(window).load(function() {
    jQuery('#refresh-canvas').click(function() { jQuery('.canvas').collage(); });
    jQuery('.canvas').collage({ numberOfImages: jQuery('.canvas').find("img").length });
  });
</script>
```
