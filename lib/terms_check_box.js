// Fixes style for terms and condtion checkbox at sing up page
Template.termsCheckbox.onRendered(function(){
  Logger.info("success calling style-checkbox");
  $("#style-checkbox").parent().removeClass("list-group-item");
});
