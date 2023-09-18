function skillsMember(){
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        ControllerAs: 'vm',
        bindToController:true,
        scope: {
            member: '='
        }
    }
}