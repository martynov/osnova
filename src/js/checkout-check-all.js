window.addEventListener('DOMContentLoaded', function () {
    this.document.querySelector('.js-checkout-check-all').addEventListener('click', function () {
        document.querySelectorAll('.product-preview-row__checkbox > input[type=checkbox]').forEach((checkbox) => {
            checkbox.checked = true
        })
    })

    this.document.querySelector('.js-remove-checked').addEventListener('click', async function () {
        let checkedArray = []

        document.querySelectorAll('.product-preview-row__checkbox > input[type=checkbox]').forEach((checkbox) => {
            if (checkbox.checked) {
                checkedArray.push(checkbox.getAttribute('value'))
            }
        })

        if (checkedArray.length && confirm('Вы хотите удалить выбранные товары?')) {
            let url = document.querySelector('.js-remove-checked').getAttribute('data-delete-url');

            await fetch(url + '?delete=' + checkedArray.join(',')).then(() => {
                window.location.reload();
            })
        }
    })
});