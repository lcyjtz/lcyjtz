var editor = document.getElementById('text-input');
var preview = document.getElementById('preview');

function Editor(input, preview) {
    this.update = function() {
        preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
}
var $ = function(id) {
    return document.getElementById(id);
};
new Editor(editor, preview);

function update(src, dest) {
    var scrollRange = src.scrollHeight - src.clientHeight,
        p = src.scrollTop / scrollRange;
    dest.scrollTop = p * (dest.scrollHeight - dest.clientHeight);

}
update(editor, preview);

function monopoly(fn, duration) {
    duration = duration || 100;
    var ret = function() {
        if (!monopoly.permit) {
            monopoly.permit = fn;
        }
        if (monopoly.permit === fn) {
            clearTimeout(monopoly.permitTimer);
            monopoly.permitTimer = setTimeout(function() {
                delete monopoly.permit;
            }, duration);
            return fn.apply(this, arguments);
        }
    }
    return ret;
}
editor.addEventListener('scroll', monopoly(function(evt) {
    update(editor, preview);
}));
preview.addEventListener('scroll', monopoly(function(evt) {
    update(preview, editor);
}));