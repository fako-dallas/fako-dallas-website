const Team = () => {
  const members = [
    { name: "Mola Tom Elute", role: "President", image: "/images/team/team1.png" },
    {
      name: "Iya Emelda Longonje-Ndoko",
      role: "Vice President",
      image: "/images/team/team2.png",
    },
    {
      name: "Mola Ikome Otto",
      role: "Secretary General",
      image: "/images/team/team3.png",
    },
    {
      name: "Iya Julienne Ndoko",
      role: "Treasurer",
      image: "/images/team/team4.png",
    },
    {
      name: "Iya Dr. Nalowa Ndiva-Mongoh",
      role: "Financial Secretary",
      image: "/images/team/team5.png",
    },
    {
      name: "Mola Isaac Fende",
      role: "Cultural Director",
      image: "/images/team/team6.png",
    },
    {
      name: "Mola Bristel Lyonga",
      role: "Chief Wip",
      image: "/images/team/team7.png",
    },
    { name: "Mola Moki Njoh", role: "Historian", image: "/images/team/team8.png" },
    {
      name: "Govina Eyum",
      role: "Group SAGI Admin",
      image: "/images/team/team9.png",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-700 py-24">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-700 dark:text-white">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-avenir text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of leaders</p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
          {members.map((member, index) => (
            <div key={index} className="text-center group hover:scale-120">
              <img
                className="mx-auto mb-6 w-50 h-50 object-cover shadow-lg rounded-lg ring-4   transition-transform duration-500"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-2xl font-bold font-poppins text-gray-700 dark:text-white group-hover:text-brandGreen transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-avenir">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
