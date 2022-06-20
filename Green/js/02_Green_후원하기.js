var $target = $('dt'),
        isClass = null;

    $target.on('click', function () {

        var _$self = $(this),
        oldClass = _$self.siblings('.' + isClass);

        if(!!oldClass) {
            oldClass.removeClass(isClass).next().slideUp();
        }

        if(!_$self.is(isClass)) {
           _$self.addClass('on').next().slideDown();
        }

        isClass = _$self.attr('class');

    });