/**
 * Created by Administrator on 2018/12/7.
 */

//���������һ���͵���������      �ڶ�����ʾ
$(function(){
     $('.ty-dierye').on('click',function(){
         $('.ty-di-yi-ge').hide();
         $('.ty-dier').show();
         $('.ty-wd').hide();

     })

    //����ڶ�ҳ��ת ���ص�һҳ  �ڶ�ҳ����ҳ����  ��һҳ��ʾ
    $('#ty-tiaozhuan').on('click',function(){
        $('.ty-dier').hide();
        $('.ty-wd').hide();
        $('.ty-di-yi-ge').show();
    })

   //���������ʾ��֤ͼƬ
    $('.ty-limian').mouseenter(function(){
         $('.ty-yzt').show();
    })

    //����Ƴ�����ͼƬ
    $('.ty-limian').mouseleave(function(){
        $('.ty-yzt').hide();
    })


    //�������ҳ�ŷ�  ��ʾ�ڶ�ҳ   ���ص���ҳ�͵�һҳ
    $('.ty-cbge #ty-syydd').on('click',function(){
        $('.ty-wd').hide();//������
        $('.ty-dier').show();//��ʾ��
        $('.ty-di-yi-ge').hide();//����һ
    })

    //����������ҵ�  ��ʾ����ҳ  ���ص�һ�ڶ�
    $('.ty-wds').on('click',function(){
        $('.ty-di-yi-ge').hide();//����һ
        $('.ty-wd').show();//��ʾ��
        $('.ty-dier').hide();//���ض�
    })


})