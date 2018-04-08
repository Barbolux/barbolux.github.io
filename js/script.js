

        function toggleInfos() {
          document.getElementsByClassname('extraInfos').forEach((elem) => elem.classList.toggle('show'));
        }
    

        //<![CDATA[
        var owa_baseUrl = 'https://a1000ton.com.br/central/owa/';
        var owa_cmds = owa_cmds || [];
        owa_cmds.push(['setSiteId', '652785827c0e0ab4ddbec39086d5c39d']);
        owa_cmds.push(['trackPageView']);
        owa_cmds.push(['trackClicks']);
        
        (function() {
        	var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
        	owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
        	_owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
        	var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
        }());
        //]]>
    