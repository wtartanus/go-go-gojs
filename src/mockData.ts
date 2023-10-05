export const nodeDataArray = [
    { key: 0, name: "George V", gender: "M", birthYear: "1865", deathYear: "1936", reign: "1910-1936", photo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Kinggeorgev1928.jpg"},
    { key: 1, parent: 0, name: "Edward VIII", gender: "M", birthYear: "1894", deathYear: "1972", reign: "1936", photo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Prince-Edward-Duke-of-Windsor-King-Edward-VIII.jpg" },
    { key: 2, parent: 0, name: "George VI", gender: "M", birthYear: "1895", deathYear: "1952", reign: "1936-1952", photo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Georg_VI_England.jpg" },
    { key: 7, parent: 2, group: -1, name: "Elizabeth II", gender: "F", birthYear: "1926", reign: "1952-", photo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Queen_Elizabeth_II_March_2015.jpg" },
    { key: 16, parent: 7, name: "Charles, Prince of Wales", gender: "M", birthYear: "1948", photo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/2019_Reuni%C3%A3o_Bilateral_com_o_Pr%C3%ADncipe_Charles_-_48948389972_%28cropped%29.jpg" },
    { key: 38, parent: 16, name: "Prince William", gender: "M", birthYear: "1982", photo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Prince_William%2C_Duke_of_Cambridge.jpg"},
    { key: 39, parent: 16, name: "Prince Harry of Wales", gender: "M", birthYear: "1984", photo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Lancering_Invictus_Games_2020-7_%28cropped%29.jpg" },
    { key: 17, parent: 7, name: "Anne, Princess Royal", gender: "F", birthYear: "1950", photo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Princess_Anne_October_2015.jpg" },
    { key: 40, parent: 17, name: "Peter Phillips", gender: "M", birthYear: "1977" },
    { key: 82, parent: 40, name: "Savannah Phillips", gender: "F", birthYear: "2010" },
    { key: 41, parent: 17, name: "Zara Phillips", gender: "F", birthYear: "1981", photo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Zara_Phillips_%282012%29.jpg" },
    { key: 18, parent: 7, name: "Prince Andrew", gender: "M", birthYear: "1960" },
    { key: 42, parent: 18, name: "Princess Beatrice of York", gender: "F", birthYear: "1988" },
    { key: 43, parent: 18, name: "Princess Eugenie of York", gender: "F", birthYear: "1990" },
    { key: 19, parent: 7, name: "Prince Edward", gender: "M", birthYear: "1964" },
    { key: 44, parent: 19, name: "Lady Louise Windsor", gender: "F", birthYear: "2003" },
    { key: 45, parent: 19, name: "James, Viscount Severn", gender: "M", birthYear: "2007" },
    { key: 8, parent: 2, name: "Princess Margaret", gender: "F", birthYear: "1930", deathYear: "2002" },
    { key: 20, parent: 8, name: "David Armstrong-Jones", gender: "M", birthYear: "1961" },
    { key: 21, parent: 8, name: "Lady Sarah Chatto", gender: "F", birthYear: "1964" },
    { key: 46, parent: 21, name: "Samuel Chatto", gender: "M", birthYear: "1996" },
    { key: 47, parent: 21, name: "Arthur Chatto", gender: "M", birthYear: "1999" },
    { key: 3, parent: 0, name: "Mary, Princess Royal", gender: "F", birthYear: "1897", deathYear: "1965" },
    { key: 9, parent: 3, name: "George Lascelles", gender: "M", birthYear: "1923", deathYear: "2011" },
    { key: 22, parent: 9, name: "David Lascelles", gender: "M", birthYear: "1950" },
    { key: 48, parent: 22, name: "Emily Shard", gender: "F", birthYear: "1975" },
    { key: 49, parent: 22, name: "Benjamin Lascelles", gender: "M", birthYear: "1978" },
    { key: 50, parent: 22, name: "Alexander Lascelles", gender: "M", birthYear: "1980" },
    { key: 51, parent: 22, name: "Edward Lascelles", gender: "M", birthYear: "1982" },
    { key: 23, parent: 9, name: "James Lascelles", gender: "M", birthYear: "1953" },
    { key: 52, parent: 23, name: "Sophie Lascelles", gender: "F", birthYear: "1973" },
    { key: 53, parent: 23, name: "Rowan Lascelles", gender: "M", birthYear: "1977" },
    { key: 54, parent: 23, name: "Tanit Lascelles", gender: "F", birthYear: "1981" },
    { key: 55, parent: 23, name: "Tewa Lascelles", gender: "M", birthYear: "1985" },
    { key: 24, parent: 9, name: "Jeremy Lascelles", gender: "M", birthYear: "1955" },
    { key: 56, parent: 24, name: "Thomas Lascelles", gender: "M", birthYear: "1982" },
    { key: 57, parent: 24, name: "Ellen Lascelles", gender: "F", birthYear: "1984" },
    { key: 58, parent: 24, name: "Amy Lascelles", gender: "F", birthYear: "1986" },
    { key: 59, parent: 24, name: "Tallulah Lascelles", gender: "F", birthYear: "2005" },
    { key: 25, parent: 9, name: "Mark Lascelles", gender: "M", birthYear: "1964" },
    { key: 60, parent: 25, name: "Charlotte Lascelles", gender: "F", birthYear: "1996" },
    { key: 61, parent: 25, name: "Imogen Lascelles", gender: "F", birthYear: "1998" },
    { key: 62, parent: 25, name: "Miranda Lascelles", gender: "F", birthYear: "2000" },
    { key: 10, parent: 3, name: "Gerald Lascelles", gender: "M", birthYear: "1924", deathYear: "1998" },
    { key: 26, parent: 10, name: "Henry Lascelles", gender: "M", birthYear: "1953" },
    { key: 63, parent: 26, name: "Maximilian Lascelles", gender: "M", birthYear: "1991" },
    { key: 27, parent: 10, name: "Martin David Lascelles", gender: "M", birthYear: "1962" },
    { key: 64, parent: 27, name: "Alexander Lascelles", gender: "M", birthYear: "2002" },
    { key: 4, parent: 0, name: "Prince Henry", gender: "M", birthYear: "1900", deathYear: "1974" },
    { key: 11, parent: 4, name: "Prince William of Gloucester", gender: "M", birthYear: "1941", deathYear: "1972" },
    { key: 12, parent: 4, name: "Prince Richard", gender: "M", birthYear: "1944" },
    { key: 28, parent: 12, name: "Alexander Windsor", gender: "M", birthYear: "1974" },
    { key: 65, parent: 28, name: "Xan Windsor", gender: "M", birthYear: "2007" },
    { key: 66, parent: 28, name: "Lady Cosima Windsor", gender: "F", birthYear: "2010" },
    { key: 29, parent: 12, name: "Lady Davina Lewis", gender: "F", birthYear: "1977" },
    { key: 67, parent: 29, name: "Senna Lewis", gender: "F", birthYear: "2010" },
    { key: 30, parent: 12, name: "Lady Rose Gilman", gender: "F", birthYear: "1980" },
    { key: 68, parent: 30, name: "Lyla Gilman", gender: "F", birthYear: "2010" },
    { key: 5, parent: 0, name: "Prince George", gender: "M", birthYear: "1902", deathYear: "1942" },
    { key: 13, parent: 5, name: "Prince Edward", gender: "M", birthYear: "1935" },
    { key: 31, parent: 13, name: "George Windsor", gender: "M", birthYear: "1962" },
    { key: 69, parent: 31, name: "Edward Windsor", gender: "M", birthYear: "1988" },
    { key: 70, parent: 31, name: "Lady Marina-Charlotte Windsor", gender: "F", birthYear: "1992" },
    { key: 71, parent: 31, name: "Lady Amelia Windsor", gender: "F", birthYear: "1995" },
    { key: 32, parent: 13, name: "Lady Helen Taylor", gender: "F", birthYear: "1964" },
    { key: 72, parent: 32, name: "Columbus Taylor", gender: "M", birthYear: "1994" },
    { key: 73, parent: 32, name: "Cassius Taylor", gender: "M", birthYear: "1996" },
    { key: 74, parent: 32, name: "Eloise Taylor", gender: "F", birthYear: "2003" },
    { key: 75, parent: 32, name: "Estella Taylor", gender: "F", birthYear: "2004" },
    { key: 33, parent: 13, name: "Lord Nicholas Windsor", gender: "M", birthYear: "1970" },
    { key: 76, parent: 33, name: "Albert Windsor", gender: "M", birthYear: "2007" },
    { key: 77, parent: 33, name: "Leopold Windsor", gender: "M", birthYear: "2009" },
    { key: 14, parent: 5, name: "Princess Alexandra", gender: "F", birthYear: "1936" },
    { key: 34, parent: 14, name: "James Ogilvy", gender: "M", birthYear: "1964" },
    { key: 78, parent: 34, name: "Flora Ogilvy", gender: "F", birthYear: "1994" },
    { key: 79, parent: 34, name: "Alexander Ogilvy", gender: "M", birthYear: "1996" },
    { key: 35, parent: 14, name: "Marina Ogilvy", gender: "F", birthYear: "1966" },
    { key: 80, parent: 35, name: "Zenouska Mowatt", gender: "F", birthYear: "1990" },
    { key: 81, parent: 35, name: "Christian Mowatt", gender: "M", birthYear: "1993" },
    { key: 15, parent: 5, name: "Prince Michael of Kent", gender: "M", birthYear: "1942" },
    { key: 36, parent: 15, name: "Lord Frederick Windsor", gender: "M", birthYear: "1979" },
    { key: 37, parent: 15, name: "Lady Gabriella Windsor", gender: "F", birthYear: "1981" },
    { key: 6, parent: 0, name: "Prince John", gender: "M", birthYear: "1905", deathYear: "1919" }
];

const groupDataArray = [
    { key: -1, isGroup: true, headOfFamily: 7 },
    { key: -2, isGroup: true, headOfFamily: 8 },
    { key: -3, isGroup: true, headOfFamily: 9 },
    { key: -4, isGroup: true, headOfFamily: 10 },
    { key: -5, isGroup: true, headOfFamily: 11 },
    { key: -6, isGroup: true, headOfFamily: 12 },
    { key: -7, isGroup: true, headOfFamily: 13 },
    { key: -8, isGroup: true, headOfFamily: 14 },
    { key: -9, isGroup: true, headOfFamily: 15 },
];

const findFamily = (key: number) =>
    groupDataArray.find(({ headOfFamily }) => headOfFamily === key);

const findMember = (memberKey: number) =>
    nodeDataArray.find(({ key }) => key === memberKey);

const whichFamilyMember = (memberKey: number): number | undefined => {
    const member = findMember(memberKey);

    return findFamily(memberKey)?.key
        || (member && whichFamilyMember(member.parent));
};

export const nodeDataArrayWithGroups = [
    ...nodeDataArray.map((member) => {
        const familyMember = whichFamilyMember(member.key);

        return familyMember ? { ...member, group: familyMember } : member;
    }),
    ...groupDataArray.map((group) => ({
        ...group,
        name: `Family of ${findMember(group.headOfFamily).name}`
    }))
];

export const linkDataArray = nodeDataArray
    .filter((member) => member.parent !== undefined)
    .map(({ key, parent }) => ({ from: parent, to: key, fromPort: 'parent', toPort: 'child'  }));
