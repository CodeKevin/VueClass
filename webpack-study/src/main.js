//项目入口
// 导入jQurey
import $ from 'jquery'
import './css/index.css'


$(function () {
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor','pink')
})