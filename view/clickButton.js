function deletePatient(medRecNum) {
    let confirmation = window.confirm("Are you sure to remove this item?")
    if (confirmation) {
        window.location = "index.php?menu=p&delcom=1&medrecnum=" + medRecNum;
    }
}

function updatePatient(medRecNum) {
    window.location = "index.php?menu=pa_up&medrecnum=" + medRecNum;
}

function deleteInsurance(id) {
    let confirmation = window.confirm("Are you sure to remove this item?")
    if (confirmation) {
        window.location = "index.php?menu=i&delcom=1&id=" + id;
    }
}

function updateInsurance(id) {
    window.location = "index.php?menu=in_up&id=" + id;
}