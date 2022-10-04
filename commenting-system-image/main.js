console.log("HDcomments init");

const HDC_EL = {
    submit: document.getElementById("hdc_submit"),
    comment: document.getElementById("hdc_comment_input"),
    email: document.getElementById("hdc_email_input"),
    name: document.getElementById("hdc_name_input"),
    reaction: document.getElementsByClassName("hdc_reaction")
};

function hdc_can_submit() {
    let comment = HDC_EL.comment.value.trim();
    let email = HDC_EL.email.value.trim();
    let name = HDC_EL.name.value.trim();
    if (comment.length > 4 && email.length > 4 && name.length > 4) {
        HDC_EL.submit.classList.add("hdc_submit_enabled");
        HDC_EL.submit.disabled = false;
        console.log("ready to go");
    } else {
        HDC_EL.submit.classList.remove("hdc_sumbit_enabled");
        HDC_EL.submit.submit.disabled = true;
    }
    }
function hdc_set_event_listeners(){
    HDC_EL.Comment.addEventListener("keyup", "hdc_can_submit");
    HDC_EL.email.addEventListener("keyup", "hdc_can_submit");
    HDC_EL.nameS.addEventListener("keyup", "hdc_can_submit");
}
hdc_set_event_listeners();