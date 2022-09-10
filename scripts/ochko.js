function ochkoficate() {
    let regex_nom_acc = /(очко)/gm;
    let regex_gen = /(очка)/gm;
    let regex_dat = /(очку)/gm;
    let regex_inst = /(очком)/gm;
    let regex_prep = /(очке)/gm;

    let subst_nom_acc = 'Очко';
    let subst_gen = 'Очка';
    let subst_dat = 'Очку';
    let subst_inst = 'Очком';
    let subst_prep = 'Очке';

    const INPUT = document.getElementById('input');

    // Первая фаза. Проверка и замена номинативных и аккузативных форм
    INPUT.value = INPUT.value.replace(regex_nom_acc, subst_nom_acc);

    // Вторая фаза. Проверка и замена генитивных форм
    INPUT.value = INPUT.value.replace(regex_gen, subst_gen);

    // Первая фаза. Проверка и замена номинативных форм
    INPUT.value = INPUT.value.replace(regex_dat, subst_dat);

    // Первая фаза. Проверка и замена номинативных форм
    INPUT.value = INPUT.value.replace(regex_inst, subst_inst);

    // Первая фаза. Проверка и замена номинативных форм
    INPUT.value = INPUT.value.replace(regex_prep, subst_prep);

    INPUT.sstyle.backgroundColor = '#F8F8FF'
}