const footerColimnTitle = document.querySelectorAll('.footer__column__title-block')

footerColimnTitle.forEach(title => {
    title.addEventListener('click', e => {
        const parentColumn = title.closest('.footer__column');
        const columnList = parentColumn.querySelector('.footer__column-list');
        columnList.classList.toggle('active');
        const titlePlus = title.querySelector('.title-block__plus')
        titlePlus.classList.toggle('active')
    });
});
