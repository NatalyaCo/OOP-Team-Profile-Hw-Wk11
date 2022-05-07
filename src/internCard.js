function InternCard (Intern) {
    `
    <div class="col s4">
    <div class="card cyan lighten-3">
        <div class="card content teal lighten-5 center-align">
            <h2 class="padding-top card-title"> ${Intern.name} </h2>
            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-briefcase"></i> </h5>
        </div>
        <div class="card-content">
            <div class="card-content">
                <span>ID ${Intern.id}</span>
            </div>
            <div class="card-content">
                <span>Email:<a class='black-text' href='mailto:tom@gmail.com'> ${Intern.email}</a></span>
            </div>
            <div class="card-content">
                <span>School Attending: ${Intern.school}</span>
            </div>
        </div>
    </div>
</div> 
    `
};
module.exports = InternCard;