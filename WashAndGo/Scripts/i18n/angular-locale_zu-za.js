e other network copy utility, to copy data files to the target computer from the source computer or from another computer on the network. <b>Serialize</b> and <b>Propagate</b> are called on the source computer before <b>DeSerialize</b> is called on the target computer. <b>Deserialize</b> will not be called on the target computer if either the <b>Serialize</b> or <b>Propagate</b> method returns an error that causes replication to be terminated. <br><br></li>
<li>
Iissync.exe then calls <b>Propagate2</b> on the source computer, identifying the target computer and providing a flag that indicates the signatures were not the same. Your program on the source computer can then perform any termination tasks you require associated with this target computer. </li>
</ul>
<p>
<b>Scenario B:</b> 
<ul>
<li>
The process operates exactly the same for each target computer as described in Scenario A. <br><br></li>
<li>
Iissync.exe calls the source computer's <b>GetSignature</b> method only once. The returned signature is compared against each target computer's signature. <br><br></li>
<li>
If any target computer's signature differs from the source computer, iissync.exe calls the source computer's <b>Serialize</b> method once. Your program returns data to iissync.exe for presentation to all target computers that have different signatures. Iissync.exe also calls the <b>Propagate</b> method on the source computer once for each target computer with a signature mismatch. The data returned from the source computer's <b>Serialize</b> method is presented through the <b>DeSerialize</b> method to those target computers that have different signatures. <b>DeSerialize</b> will not be called on the target computer if either the <b>Serialize</b> or <b>Propagate</b> method returns an error that causes replication to be terminated. <br><br></li>
<li>
After iissync replicates the metabase to a target computer, it calls the <b>Propagate2</b> method on the source computer, identifying the target computer and providing a flag that indicates whether or not this target computer's signature matches the source computer's signature. Iissync.exe calls the source computer's <b>Propagate2</b> method once for each target computer, regardless of whether the target computer's signature matches the source computer's signature. <b>Propagate2</b