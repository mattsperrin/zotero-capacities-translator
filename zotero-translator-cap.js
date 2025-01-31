{
  "translatorID":"ada092d2-a257-46af-b9a3-2f04a55cb04f",
  "translatorType":2,
  "label":"Capacities Export",
  "creator":"Matt Sperrin",
  "target":"md",
  "minVersion":"2.0",
  "maxVersion":"",
  "priority":200,
  "inRepository":false,
  "lastUpdated":"2024-03-25"
  }
   
  function doExport() {
    var item;
    while (item = Zotero.nextItem()) {
      var date = Zotero.Utilities.strToDate(item.date);
      var dateS = (date.year) ? date.year : item.date;   

      // ref
      Zotero.write('- ' + item.creators[0].lastName + ' (' + (dateS||'') + ') :: ' + item.title + '\n');
  
      // author
      Zotero.write('  - Authors: \n');
      // write authors as indented nodes
      for (author in item.creators){
        Zotero.write('    - ' + (item.creators[author].firstName||'') + ' ' + (item.creators[author].lastName||'') + '\n');
      }
      Zotero.write('\n');


      // year

      Zotero.write('  - Year: ')
      Zotero.write((dateS||'') + '\n')
      
      // publication
      Zotero.write('  - Publication: ')
      Zotero.write((item.publicationTitle ||'')+ '\n')
   
      // zotero link
      var library_id = item.libraryID ? item.libraryID : 0;  
      var itemLink = 'zotero://select/items/' + library_id + '_' + item.key;
   
      Zotero.write('  - Zotero link: ')
      Zotero.write('[Zotero Link](' + itemLink + ')\n')
   
      // url with citation
      Zotero.write('  - URL: ' + (item.url||'') + '\n')
      
      Zotero.write('  - Abstract: '+  (item.abstractNote || '')+ '\n')
    }
  }
  
