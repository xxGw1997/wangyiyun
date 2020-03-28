export function singerCategoryCode(code){
    switch(code){
        case '': return 0
        case '1-1': return 1001
        case '1-2': return 1002
        case '1-3': return 1003
        case '2-1': return 2001
        case '2-2': return 2002
        case '2-3': return 2003
        case '3-1': return 6001
        case '3-2': return 6002
        case '3-3': return 6003
        case '4-1': return 7001
        case '4-2': return 7002
        case '4-3': return 7003
        case '5-1': return 4001
        case '5-2': return 4002
        case '5-3': return 4003
        default : return 0
    }
}