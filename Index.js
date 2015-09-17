/**
 * Created by ESIR on 2015/9/11.
 */

angular.module('index_title', ['drawarlayout'])
    .controller('index_title_controller', function ($window) {
      var dest = {
        'github': 'https://github.com/Yasic',
        'linkedin': 'https://www.linkedin.com/pub/%E7%83%9C-%E4%BD%99/a9/841/76',
        'android': 'http://pre.im/025b'
      }
      this.go = function(target){
        $window.open(dest[target], '_blank');
      };
      this.menuitemlist = [{name:'Note'},{name:'Reminders'},{name:'finance'},{name:'About'}];
    });

angular.module('drawarlayout',[])
    .controller('drawarlayout_controller',function(){
        this.menuitemlist = [
            {name:'Note'},
            {name:'Reminders'},
            {name:'Finance'},
            {name:'Setting'}];
        this.menuimglist = {
            'Note':'Images/ic_file_outline_black_48dp.png',
            'Reminders':'Images/ic_bell_black_48dp.png',
            'Finance':'Images/ic_server_black_48dp.png',
            'Setting':'Images/ic_settings_black_48dp.png'
        }
    });
