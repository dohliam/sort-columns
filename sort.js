function sort() {
  var sort_col = document.getElementById("sortcol");
  insep = document.getElementById("insep");
  sortarray = sort_col.value.split(insep.value.replace(/\\n/g, "\n").replace(/\\t/g, "\t"));
  outsep = document.getElementById("outsep");
  sort_col.value = sortarray.sort().join(outsep.value).replace(/\\n/g, "\n").replace(/\\t/g, "\t");
}

function uniq() {
  var sort_col = document.getElementById("sortcol");
  insep = document.getElementById("insep");
  outsep = document.getElementById("outsep");
  uniqarray = sort_col.value.split(insep.value.replace(/\\n/g, "\n").replace(/\\t/g, "\t"));
  sort_col.value = unique(uniqarray).join(outsep.value).replace(/\\n/g, "\n").replace(/\\t/g, "\t");
}

function unique(a) {
  u = new Array(0);
  for(i=0;i<a.length;i++){
    if(!contains(u, a[i])){
      u.length+=1;
      u[u.length-1]=a[i];
    }
  }
  return u;
}

function contains(a, e) {
  for(j=0;j<a.length;j++)if(a[j]==e)return true;
  return false;
}

function uniqd() {
  var sort_col = document.getElementById("sortcol");
  insep = document.getElementById("insep");
  outsep = document.getElementById("outsep");
  uniqarray = sort_col.value.split(insep.value.replace(/\\n/g, "\n").replace(/\\t/g, "\t"));
  sort_col.value = uniqued(uniqarray).join(outsep.value).replace(/\\n/g, "\n").replace(/\\t/g, "\t");
}

function uniqued(a) {
  uniq1 = new Array(0);
  uniq2 = new Array(0);
  for(i=0;i<a.length;i++){
    if(!contains(uniq1, a[i])){
      uniq1.length+=1;
      uniq1[uniq1.length-1]=a[i];
    } else {
      uniq2.length+=1;
      uniq2[uniq2.length-1]=a[i];
    }
  }
  return uniq2;
}

function random() {
  var sort_col = document.getElementById("sortcol");
  var insep = document.getElementById("insep");
  var a = sort_col.value.split(insep.value.replace(/\\n/g, "\n").replace(/\\t/g, "\t"));
  var outsep = document.getElementById("outsep");
  var b = new Array(0);
  for (item in a) {
    b.push(Math.random() + "@@" + a[item]);
  }
  c = b.sort().join(outsep.value).replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/0\.[\d]+@@/g, "");
  sort_col.value = c;
}

function reverse() {
  var sort_col = document.getElementById("sortcol");
  insep = document.getElementById("insep");
  sortarray = sort_col.value.split(insep.value.replace(/\\n/g, "\n").replace(/\\t/g, "\t"));
  outsep = document.getElementById("outsep");
  sort_col.value = sortarray.reverse().join(outsep.value).replace(/\\n/g, "\n").replace(/\\t/g, "\t");
}
