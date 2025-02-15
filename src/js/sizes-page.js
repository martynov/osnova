// спизжено отсюда https://original-brands.shop/info/sizes/

if ($ && document.querySelector('.about-page .info_page')) {
    $(document).ready(function() {
        //ÐžÑ‚ÐºÑ€Ñ‹Ñ‚Ð¸Ðµ/Ð·Ð°ÐºÑ€Ñ‹Ñ‚Ð¸Ðµ Ð¿Ð¾Ð¿Ð°Ð¿Ð¾Ð² Ñ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð°Ð¼Ð¸ Ð¸ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ°Ð¼Ð¸
        $('.filter_dropdown-button').click(function() {
            $('.filter_dropdown').not($(this).closest('.filter_dropdown')).removeClass('active');
            $(this).closest('.filter_dropdown').toggleClass('active');
        });
    
        $('.catalog_filters-mobile_sort').click(function() {
            $(this).toggleClass('active');
            $('.catalog_mobile-sort .filter_dropdown').toggleClass('active');
        });
    
        $('.catalog_filters-mobile_popup').on('click', function() {
            $('.catalog_mobile-filter').addClass('active');
        });
    
        $('.catalog_mobile-filter_close').on('click', function() {
            $('.catalog_mobile-filter').removeClass('active');
        });
    
        $('.catalog_mobile-filter_name').on('click', function() {
            $(this).siblings('.catalog_mobile-filter_children').addClass('active');
        });
    
        $('.catalog_mobile-filter_back').on('click', function() {
            $(this).closest('.catalog_mobile-filter_children').removeClass('active');
        });
    
        //Ð—Ð°ÐºÑ€Ñ‹Ñ‚Ð¸Ðµ Ð¿Ð¾Ð¿Ð°Ð¿Ð¾Ð² Ð¿Ñ€Ð¸ ÐºÐ»Ð¸ÐºÐµ Ð²Ð½Ðµ
        $('body').click(function (event) {
            if(
                    !$(event.target).closest('.filter_dropdown-button').length && 
                    !$(event.target).is('.filter_dropdown-button') && 
                    !$(event.target).closest('.filter_dropdown').length && 
                    !$(event.target).is('.filter_dropdown') &&
                    !$(event.target).is('.catalog_filters-mobile_sort') 
                ) {
                    $('.filter_dropdown').removeClass('active');
            }
        });
    
        //Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð²ÑÐµ Ð² Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ðµ
        $('.filter_dropdown-all').click(function() {
            event.preventDefault();
            const checkboxes = $(this).closest('.filter_dropdown-list').find('input[type="checkbox"]');
            const checkedCheckboxes = $(this).closest('.filter_dropdown-list').find('input[type="checkbox"]:checked');
            if(checkboxes.length === checkedCheckboxes.length) {
                checkboxes.prop('checked', false);
                $(this).text($(this).data('unchecked'));
            } else {
                checkboxes.prop('checked', true);
                $(this).text($(this).data('checked'));
            }
        });
        // ÐžÐ±ÑŠÐµÐ´Ð¸Ð½ÐµÐ½Ð½Ñ‹Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð°
        $(".filter-stick-main").on("click", function() {
            const idStick = $(this).attr('data-id-stick-control');
            if (idStick) {
                const countStick = $('.filter-stick-main[data-id-stick-control='+idStick+']').length;
                const countStickCheck = $('.filter-stick-main[data-id-stick-control='+idStick+']').find('input[type="checkbox"]:checked').length;
                $('.hidden-stick[data-id-stick='+idStick+']').find('input[type="checkbox"]').prop('checked', !!countStickCheck);
            }
        });
        //Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐºÑÑ‚Ð° Ð² ÐºÐ½Ð¾Ð¿ÐºÐµ Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð²ÑÐµ
        $('.filter_dropdown-list label').click(function() {		
            const checkboxes = $(this).closest('.filter_dropdown').find('input[type="checkbox"]');
            const checkedCheckboxes = $(this).closest('.filter_dropdown').find('input[type="checkbox"]:checked');
            const allButton = $(this).closest('.filter_dropdown').find('.filter_dropdown-all');
            if(checkboxes.length !== checkedCheckboxes.length) {
                allButton.text(allButton.data('unchecked'));
            } else {
                allButton.text(allButton.data('checked'));
            }
        });
    
        //Ð¡Ð¼ÐµÑ‰ÐµÐ½Ð¸Ðµ Ð²Ñ‹Ð¿Ð°Ð´Ð°ÑŽÑ‰ÐµÐ³Ð¾ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð°
        $('.filter_dropdown-list').each(function(index, element) {
            if($(element).offset().left + $(element).width() > $(window).width()) {
                $(element).css({ 'left': 'auto', 'right': 0})
            } else if($(element).offset().left < 0) {
                $(element).css({ 'left': 0, 'right': 'auto'})
            }
        });
    
        $(window).resize(function() {
            $('.catalog_filters .filter_dropdown-list').each(function(index, element) {
                if($(element).offset().left + $(element).width() > $(window).width()) {
                    $(element).css({ 'left': 'auto', 'right': 0})
                } else if($(element).offset().left < 0) {
                    $(element).css({ 'left': 0, 'right': 'auto'})
                }
            });
        });
    
        //Ð˜Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ñ‚ÐµÐºÑÑ‚ Ð² ÐºÐ½Ð¾Ð¿ÐºÐµ Ñ radio Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ð°Ð¼Ð¸
        $('.filter_dropdown-radio input[type="radio"]').change(function() {
            const text = $(this).siblings('.filter_dropdown-name').text();
            $(this).closest('.filter_dropdown').find('.filter_dropdown-button').text(text);
        });
    
        //ÐŸÑ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð¾Ð²
        $('.filter_dropdown-apply').click(function() {
            const checkedValue = $(this).closest('.filter_dropdown').find('input[type="checkbox"]:checked');
            const resultField = $(this).closest('.filter_dropdown').find('.filter_dropdown-result');
            const filterButton = $(this).closest('.filter_dropdown').find('.filter_dropdown-button');
    
            $(this).closest('.filter_dropdown').removeClass('active');
    
            if (checkedValue.length) {
                filterButton.addClass('checked');
            } else {
                resultField.text('');
                filterButton.removeClass('checked');
            }
        });
    
        //Ð’Ñ‹Ð±Ð¾Ñ€ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÑÐ¾ ÑÐºÐ¸Ð´ÐºÐ¾Ð¹
        $('.filter_checkbox-button').click(function() {
            if($(this).find('input[type="checkbox"]').is(':checked')) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        });
    
        //ÐŸÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ñ‚Ð¸Ð¿Ð° Ñ€Ð°Ð·Ð¼ÐµÑ€Ð¾Ð²
        $(document).on('click', '.catalog_item-sizes_types button', function() {
            const type = $(this).data('type');
            $(this).closest('.catalog_item-sizes_types').find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.catalog_item-sizes').find('.catalog_item-sizes_list').removeClass('active');
            $(this).closest('.catalog_item-sizes').find(`[data-id="${type}"]`).addClass('active');
            const buttonSize = $(this).closest('.catalog_item-sizes').find(`[data-id="${type}"]`)
                .find('button');
            const idOffer = buttonSize.attr('data-id-offer');
            const dataSize = buttonSize.attr('data-size');
            const dataQuantity = buttonSize.attr('data-quantity');
            const btnMess = $(this).closest('.catalog_item-content').find('.js-btn-cart-mess');
            if (idOffer) {
                const idProduct = $(this).closest('.catalog_item-sizes').attr('data-id-product');
                const btnCart = $(".catalog_item-add[data-id-product='" + idProduct + "']");
                if (dataQuantity > 0) {
                    btnCart.removeClass('hidden');
                    btnMess.addClass('hidden');
                    btnCart.attr({
                        'data-id': idOffer,
                        'data-size': dataSize,
                    });
                } else {
                    btnCart.addClass('hidden');
                    btnMess.removeClass('hidden');
                }
            }
            buttonSize.removeClass('active');
            buttonSize.not('.hidden').eq(0).addClass('active');
        });
    
        //ÐŸÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ñ€Ð°Ð·Ð¼ÐµÑ€Ð¾Ð²
        $(document).on('click', '.catalog_item-sizes_list button', function() {
            $(this).closest('.catalog_item-sizes_list').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    
        $('.size_select-list li').on('click', function() {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.info_page-sizes_select').find('.size_select-current').text($(this).text());
        });

    });

    $(document).ready(function(e){
        // Бренды
        $(".size-adidas").click(function() {
            hideAllBrands();
            $(".block-size .adidas").show();
        });
        $(".size-puma").click(function() {
            hideAllBrands();
            $(".block-size .puma").show();
        });
        $(".size-under-armour").click(function() {
            hideAllBrands();
            $(".block-size .under-armour").show();
        });
        $(".size-calvin-klein").click(function() {
            hideAllBrands();
            $(".block-size .calvin-klein").show();
        });
        $(".size-nike").click(function() {
            hideAllBrands();
            $(".block-size .nike").show();
        });
        $(".size-nb").click(function() {
            hideAllBrands();
            $(".block-size .nb").show();
        });
        $(".size-crocs").click(function() {
            hideAllBrands();
            $(".block-size .crocs").show();
        });
        $(".size-ac").click(function() {
            hideAllBrands();
            $(".block-size .ac").show();
        });
        $(".size-dkny").click(function() {
            hideAllBrands();
            $(".block-size .dkny").show();
        });

        // Половозрастные группы
        $(".size-men").click(function() {
            hideAllGroups();
            $(".block-size .for-men").show();
        });
        $(".size-women").click(function() {
            hideAllGroups();
            $(".block-size .for-women").show();
        });
        $(".size-children").click(function() {
            hideAllGroups();
            $(".block-size .for-children").show();
        });

        function hideAllBrands() {
            $(".block-size .adidas, .block-size .puma, .block-size .under-armour, .block-size .calvin-klein, .block-size .nike, .block-size .nb, .block-size .crocs, .block-size .ac, .block-size .dkny").hide();
        }

        function hideAllGroups() {
            $(".block-size .for-men, .block-size .for-women, .block-size .for-children").hide();
        }

        // Изначально показываем первый бренд и первую категорию
        $(".block-size .adidas").show();
        $(".block-size .for-men").show();
    });
}
