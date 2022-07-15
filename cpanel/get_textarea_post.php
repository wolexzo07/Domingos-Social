
		 
<textarea required class="form-control" id="frc" name="postcontent" placeholder="What do you have to say" data-emojiable="true" rows=""></textarea>


	<script>
      $(function() {
        // Initializes and creates emoji set from sprite sheet
        window.emojiPicker = new EmojiPicker({
          emojiable_selector: '[data-emojiable=true]',
          assetsPath: '../img/',
          popupButtonClasses: 'fa fa-smile-o'
        });
        
        window.emojiPicker.discover();
      });
    </script>
	