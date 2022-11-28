

// create mpc with moves //
function make_mpc(){
    let store = [];
    store.push((Math.floor(Math.random()*17)));
    if(store[0] == 1 && l1 == 1){
        b1.style.background = func_color('mpc', b1);
        l1 = 0;
    }
    else if(store[0] == 2 && l2 == 1){
        b2.style.background = func_color('mpc', b2);
        l2 = 0;
    }
    else if(store[0] == 3 && l3 == 1){
        b3.style.background = func_color('mpc', b3);
        l3 = 0;
    }
    else if(store[0] == 4 && l4 == 1){
        b4.style.background = func_color('mpc', b4);
        l4 = 0;
    }
    else if(store[0] == 5 && l5 == 1){
        b5.style.background = func_color('mpc', b5);
        l5 = 0;
    }
    else if(store[0] == 6 && l6 == 1){
        b6.style.background = func_color('mpc', b6);
        l6 = 0;
    }
    else if(store[0] == 7 && l7 == 1){
        b7.style.background = func_color('mpc', b7);
        l7 = 0;
    }
    else if(store[0] == 8 && l8 == 1){
        b8.style.background = func_color('mpc', b8);
        l8 = 0;
    }
    else if(store[0] == 9 && l9 == 1){
        b9.style.background = func_color('mpc', b9);
        l9 = 0;
    }
    else if(store[0] == 10 && l10 == 1){
        b10.style.background = func_color('mpc', b10);
        l10 = 0;
    }
    else if(store[0] == 11 && l11 == 1){
        b11.style.background = func_color('mpc', b11);
        l11 = 0;
    }
    else if(store[0] == 12 && l12 == 1){
        b12.style.background = func_color('mpc', b12);
        l12 = 0;
    }
    else if(store[0] == 13 && l13 == 1){
        b13.style.background = func_color('mpc', b13);
        l13 = 0;
    }
    else if(store[0] == 14 && l14 == 1){
        b14.style.background = func_color('mpc', b14);
        l14 = 0;
    }
    else if(store[0] == 15 && l15 == 1){
        b15.style.background = func_color('mpc', b15);
        l15 = 0;
    }
    else if(store[0] == 16 && l16 == 1){
        b16.style.background = func_color('mpc', b16);
        l16 = 0;
    }
    else{
        make_mpc();
    }
}

// sonder_color / get var from css //
// ratio 2:1 (gold = rare)//
function event_color(){
    let sonder = document.querySelector(':root');
    let s_color_1 = getComputedStyle(sonder).getPropertyValue('--sc1');
    let s_color_2 = getComputedStyle(sonder).getPropertyValue('--sc1');
    let s_color_3 = getComputedStyle(sonder).getPropertyValue('--sc2');
    const s_color_list = [s_color_1, s_color_2, s_color_3];
    let s_color_random = Math.floor(Math.random()*s_color_list.length);
    return s_color_list[s_color_random];
}

// create restart and exit for player //
function restart_exit(){
    if(b14.addEventListener('click', () => window.location.reload())){
    }
    else if(b15.addEventListener('click', () => window.close())){
    }
}

/// b16.addEventListener('click', () => {change_bg(16);});

// create win_end_1 //
function end_1(sum_player_list, sum_mpc_list){
    b1.style.background = 'black';
    b1.innerText = 'X';
    b1.style.color = 'red';

    b2.style.background = 'black';
    b2.innerText = ':';
    b2.style.color = 'red';

    b3.style.background = 'black';
    b3.innerText = ')';
    b3.style.color = 'red';

    b4.style.background = 'black';
    b4.innerText = 'X';
    b4.style.color = 'red';

    b5.style.background = 'black';
    b5.innerText = 'X';
    b5.style.color = 'red';

    b8.style.background = 'black';
    b8.innerText = 'X';
    b8.style.color = 'red';

    b9.style.background = 'black';
    b9.innerText = 'X';
    b9.style.color = 'red';

    b12.style.background = 'black';
    b12.innerText = 'X';
    b12.style.color = 'red';

    b13.style.background = 'black';
    b13.innerText = '>';
    b13.style.color = 'red';

    b14.style.background = 'black';
    b14.innerText = 'new';
    b14.style.color = 'red';

    b15.style.background = 'black';
    b15.innerText = 'exit';
    b15.style.color = 'red';

    b16.style.background = 'black';
    b16.innerText = '<';
    b16.style.color = 'red';

    if(sum_player_list.length > 1){

        b6.style.background = 'black';
        b6.innerText = sum_player_list[0];
        b6.style.color = 'red';
    
        b7.style.background = 'black';
        b7.innerText = sum_player_list[1];
        b7.style.color = 'red';
    }
    else{
        b6.style.background = 'black';
        b6.innerText = '0';
        b6.style.color = 'red';
    
        b7.style.background = 'black';
        b7.innerText = sum_player_list[0];
        b7.style.color = 'red';
    }

    if(sum_mpc_list.length > 1){

        b10.style.background = 'black';
        b10.innerText = sum_mpc_list[0];
        b10.style.color = 'white';
    
        b11.style.background = 'black';
        b11.innerText = sum_mpc_list[1];
        b11.style.color = 'white';
    }
    else{
        b10.style.background = 'black';
        b10.innerText = '0';
        b10.style.color = 'white';
    
        b11.style.background = 'black';
        b11.innerText = sum_mpc_list[0];
        b11.style.color = 'white';
    }
    restart_exit();
}

// create win_end_2 //
function end_2(sum_player_list, sum_mpc_list){
    b1.style.background = 'black';
    b1.innerText = 'X';
    b1.style.color = 'white';

    b2.style.background = 'black';
    b2.innerText = ':';
    b2.style.color = 'white';

    b3.style.background = 'black';
    b3.innerText = '(';
    b3.style.color = 'white';

    b4.style.background = 'black';
    b4.innerText = 'X';
    b4.style.color = 'white';

    b5.style.background = 'black';
    b5.innerText = 'X';
    b5.style.color = 'white';

    b8.style.background = 'black';
    b8.innerText = 'X';
    b8.style.color = 'white';

    b9.style.background = 'black';
    b9.innerText = 'X';
    b9.style.color = 'white';

    b12.style.background = 'black';
    b12.innerText = 'X';
    b12.style.color = 'white';

    b13.style.background = 'black';
    b13.innerText = '>';
    b13.style.color = 'white';

    b14.style.background = 'black';
    b14.innerText = 'new';
    b14.style.color = 'white';

    b15.style.background = 'black';
    b15.innerText = 'exit';
    b15.style.color = 'white';

    b16.style.background = 'black';
    b16.innerText = '<';
    b16.style.color = 'white';

    if(sum_mpc_list.length > 1){

        b6.style.background = 'black';
        b6.innerText = sum_mpc_list[0];
        b6.style.color = 'white';
    
        b7.style.background = 'black';
        b7.innerText = sum_mpc_list[1];
        b7.style.color = 'white';
    }
    else{
        b6.style.background = 'black';
        b6.innerText = '0';
        b6.style.color = 'white';
    
        b7.style.background = 'black';
        b7.innerText = sum_mpc_list[0];
        b7.style.color = 'white';
    }

    if(sum_player_list.length > 1){

        b10.style.background = 'black';
        b10.innerText = sum_player_list[0];
        b10.style.color = 'red';
    
        b11.style.background = 'black';
        b11.innerText = sum_player_list[1];
        b11.style.color = 'red';
    }
    else{
        b10.style.background = 'black';
        b10.innerText = '0';
        b10.style.color = 'red';
    
        b11.style.background = 'black';
        b11.innerText = sum_player_list[0];
        b11.style.color = 'red';
    }
    restart_exit();
}

// create win_end_3 //
function end_3(sum_player_list, sum_mpc_list){
    b1.style.background = 'black';
    b1.innerText = 'X';
    b1.style.color = 'white';

    b2.style.background = 'black';
    b2.innerText = '?';
    b2.style.color = 'white';

    b3.style.background = 'black';
    b3.innerText = '?';
    b3.style.color = 'white';

    b4.style.background = 'black';
    b4.innerText = 'X';
    b4.style.color = 'white';

    b5.style.background = 'black';
    b5.innerText = 'X';
    b5.style.color = 'white';

    b8.style.background = 'black';
    b8.innerText = 'X';
    b8.style.color = 'white';

    b9.style.background = 'black';
    b9.innerText = 'X';
    b9.style.color = 'white';

    b12.style.background = 'black';
    b12.innerText = 'X';
    b12.style.color = 'white';

    b13.style.background = 'black';
    b13.innerText = '>';
    b13.style.color = 'white';

    b14.style.background = 'black';
    b14.innerText = 'new';
    b14.style.color = 'white';

    b15.style.background = 'black';
    b15.innerText = 'exit';
    b15.style.color = 'white';

    b16.style.background = 'black';
    b16.innerText = '<';
    b16.style.color = 'white';

    if(sum_player_list.length > 1){

        b6.style.background = 'black';
        b6.innerText = sum_player_list[0];
        b6.style.color = 'red';
    
        b7.style.background = 'black';
        b7.innerText = sum_player_list[1];
        b7.style.color = 'red';
    }
    else{
        b6.style.background = 'black';
        b6.innerText = '0';
        b6.style.color = 'red';
    
        b7.style.background = 'black';
        b7.innerText = sum_player_list[0];
        b7.style.color = 'red';
    }

    if(sum_mpc_list.length > 1){

        b10.style.background = 'black';
        b10.innerText = sum_mpc_list[0];
        b10.style.color = 'white';
    
        b11.style.background = 'black';
        b11.innerText = sum_mpc_list[1];
        b11.style.color = 'white';
    }
    else{
        b10.style.background = 'black';
        b10.innerText = '0';
        b10.style.color = 'white';
    
        b11.style.background = 'black';
        b11.innerText = sum_mpc_list[0];
        b11.style.color = 'white';
    }
    restart_exit();
}

// create total points //
function total_point(){
    let sum_player = 0;
    let sum_mpc = 0;
    for(i of Object.values(player_dict)){
        sum_player += i;
    }
    let sum_player_list = Array.from(String(sum_player),Number);
    for(i of Object.values(mpc_dict)){
        sum_mpc += i;
    }
    let sum_mpc_list = Array.from(String(sum_mpc),Number);
    if(sum_player > sum_mpc){
        end_1(sum_player_list, sum_mpc_list);
    }
    else if(sum_mpc > sum_player){
        end_2(sum_player_list, sum_mpc_list);
    }
    else if(sum_mpc == sum_player){
        end_3(sum_player_list, sum_mpc_list);
    }
}

// funtion to set points of fields //
let counter = 0
function set_number(btn, value, maker){
    if(maker == 1){
        btn.innerText = value;
        btn.style.color = 'red';
        counter++;
    }
    if(maker == 0){
        btn.innerText = value;
        btn.style.color = 'black';
        counter++;
    }
    if(counter == 16){
        setTimeout(total_point, 300);        // code need timeout otherwise the last bachground will not black //
    }
}


// create cache hex à player and point-system //
let player_hex = [];
let mpc_hex = [];
let player_dict = {};
let mpc_dict = {};
// cache for button (change color) //
let player_field_cache = {};
let mpc_field_cache = {};

function check_points(which_store, btn){
    if(which_store == 1){
        if(player_hex[0] in player_dict){
            let value_player = player_dict[player_hex[0]];
            player_dict[player_hex[0]] = value_player * 2;
            // function to delete fields (player) //
            let btn_value_player = player_field_cache[player_hex[0]];
            btn_value_player.style.background = '#000000';
            btn_value_player.innerText = 'X';
            btn_value_player.style.color = 'white';
            player_field_cache[player_hex[0]] = btn;
            set_number(btn, player_dict[player_hex[0]], 1);
        }
        else{
            if(player_hex[0] == getComputedStyle(document.querySelector(':root')).getPropertyValue('--sc1')){
                player_dict[player_hex[0]] = 2;
                player_field_cache[player_hex[0]] = btn;
                set_number(btn, player_dict[player_hex[0]], 1);    
            }
            else if(player_hex[0] == getComputedStyle(document.querySelector(':root')).getPropertyValue('--sc2')){
                player_dict[player_hex[0]] = 3;
                player_field_cache[player_hex[0]] = btn;
                set_number(btn, player_dict[player_hex[0]], 1);
            }
            else{
                player_dict[player_hex[0]] = 1;
                player_field_cache[player_hex[0]] = btn;
                set_number(btn, player_dict[player_hex[0]], 1);
            }
        }
    }
    if(which_store == 0){
        if(mpc_hex[0] in mpc_dict){
            let value_mpc = mpc_dict[mpc_hex[0]];
            mpc_dict[mpc_hex[0]] = value_mpc * 2;
            // function to delete fields (mpc) //
            let btn_value_mpc = mpc_field_cache[mpc_hex[0]];
            btn_value_mpc.style.background = '#000000';
            btn_value_mpc.innerText = 'X';
            btn_value_mpc.style.color = 'white';
            mpc_field_cache[mpc_hex[0]] = btn;
            set_number(btn, mpc_dict[mpc_hex[0]], 0);
        }
        else{
            if(mpc_hex[0] == getComputedStyle(document.querySelector(':root')).getPropertyValue('--sc1')){
                mpc_dict[mpc_hex[0]] = 2;
                mpc_field_cache[mpc_hex[0]] = btn;
                set_number(btn, mpc_dict[mpc_hex[0]], 0);    
            }
            else if(mpc_hex[0] == getComputedStyle(document.querySelector(':root')).getPropertyValue('--sc2')){
                mpc_dict[mpc_hex[0]] = 3;
                mpc_field_cache[mpc_hex[0]] = btn;
                set_number(btn, mpc_dict[mpc_hex[0]], 0);
            }
            else{
                mpc_dict[mpc_hex[0]] = 1;
                mpc_field_cache[mpc_hex[0]] = btn;
                set_number(btn, mpc_dict[mpc_hex[0]], 0);
            }
        }
    }
}

// color-list with random choice //
function func_color(which_player, btn){
    const color_list = ['#FF5733', '#FFC300', '#8E44AD', '#48C9B0', '#85C1E9', '#D5D8DC', '#CCCCFF', '#F7DC6F', '#2ECC71', event_color()];
    let color_random = Math.floor(Math.random()*color_list.length);
    if(which_player == 'player'){
        player_hex.push(color_list[color_random]);
        check_points(1, btn);
        player_hex = [];
    }
    if(which_player == 'mpc'){
        mpc_hex.push(color_list[color_random]);
        check_points(0, btn);
        mpc_hex = [];
    }
    return color_list[color_random];
}

// create locks for fields //
let l1 = 1
let l2 = 1
let l3 = 1
let l4 = 1
let l5 = 1
let l6 = 1
let l7 = 1
let l8 = 1
let l9 = 1
let l10 = 1
let l11 = 1
let l12 = 1
let l13 = 1
let l14 = 1
let l15 = 1
let l16 = 1

// set color on field //
function change_bg(field){

    if(field == 1 && l1 == 1){
        b1.style.background = func_color('player', b1);
        l1 = 0;
        make_mpc();
}
    if(field == 2 && l2 == 1){
        b2.style.background = func_color('player', b2);
        l2 = 0;
        make_mpc();
}
    if(field == 3 && l3 == 1){
        b3.style.background = func_color('player', b3);
        l3 = 0;
        make_mpc();
}
    if(field == 4 && l4 == 1){
        b4.style.background = func_color('player', b4);
        l4 = 0;
        make_mpc();
}
    if(field == 5 && l5 == 1){
        b5.style.background = func_color('player', b5);
        l5 = 0;
        make_mpc();
}
    if(field == 6 && l6 == 1){
        b6.style.background = func_color('player', b6);
        l6 = 0;
        make_mpc();
}
    if(field == 7 && l7 == 1){
        b7.style.background = func_color('player', b7);
        l7 = 0;
        make_mpc();
}
    if(field == 8 && l8 == 1){
        b8.style.background = func_color('player', b8);
        l8 = 0;
        make_mpc();
}
    if(field == 9 && l9 == 1){
        b9.style.background = func_color('player', b9);
        l9 = 0;
        make_mpc();
}
    if(field == 10 && l10 == 1){
        b10.style.background = func_color('player', b10);
        l10 = 0;
        make_mpc();
}
    if(field == 11 && l11 == 1){
        b11.style.background = func_color('player', b11);
        l11 = 0;
        make_mpc();
}
    if(field == 12 && l12 == 1){
        b12.style.background = func_color('player', b12);
        l12 = 0;
        make_mpc();
}
    if(field == 13 && l13 == 1){
        b13.style.background = func_color('player', b13);
        l13 = 0;
        make_mpc();
}
    if(field == 14 && l14 == 1){
        b14.style.background = func_color('player', b14);
        l14 = 0;
        make_mpc();
}
    if(field == 15 && l15 == 1){
        b15.style.background = func_color('player', b15);
        l15 = 0;
        make_mpc();
}
    if(field == 16 && l16 == 1){
        b16.style.background = func_color('player', b16);
        l16 = 0;
        make_mpc();
}
}

// create buttons //
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b10 = document.getElementById('b10');
let b11 = document.getElementById('b11');
let b12 = document.getElementById('b12');
let b13 = document.getElementById('b13');
let b14 = document.getElementById('b14');
let b15 = document.getElementById('b15');
let b16 = document.getElementById('b16');

// link button per click to function //
b1.addEventListener('click', () => {change_bg(1);});
b2.addEventListener('click', () => {change_bg(2);});
b3.addEventListener('click', () => {change_bg(3);});
b4.addEventListener('click', () => {change_bg(4);});
b5.addEventListener('click', () => {change_bg(5);});
b6.addEventListener('click', () => {change_bg(6);});
b7.addEventListener('click', () => {change_bg(7);});
b8.addEventListener('click', () => {change_bg(8);});
b9.addEventListener('click', () => {change_bg(9);});
b10.addEventListener('click', () => {change_bg(10);});
b11.addEventListener('click', () => {change_bg(11);});
b12.addEventListener('click', () => {change_bg(12);});
b13.addEventListener('click', () => {change_bg(13);});
b14.addEventListener('click', () => {change_bg(14);});
b15.addEventListener('click', () => {change_bg(15);});
b16.addEventListener('click', () => {change_bg(16);});